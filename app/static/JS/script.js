document.addEventListener('DOMContentLoaded', function () {

    // ── Input validation for the add-task form ────────────────────────
    const addForm = document.querySelector('.text_form');
    if (addForm) {
        const input = addForm.querySelector('input[name="title"]');
        const errorEl = document.createElement('span');
        errorEl.className = 'input-error';
        input.insertAdjacentElement('afterend', errorEl);

        addForm.addEventListener('submit', function (e) {
            const val = input.value.trim();
            if (!val) {
                e.preventDefault();
                errorEl.textContent = 'Task name cannot be empty.';
                input.classList.add('input-invalid');
                return;
            }
            if (val.length > 100) {
                e.preventDefault();
                errorEl.textContent = 'Task name must be 100 characters or fewer.';
                input.classList.add('input-invalid');
                return;
            }
            errorEl.textContent = '';
            input.classList.remove('input-invalid');
        });

        input.addEventListener('input', function () {
            errorEl.textContent = '';
            input.classList.remove('input-invalid');
        });
    }

    // ── Read flash messages rendered by Flask and show toasts ─────────
    const flashItems = document.querySelectorAll('.flash-data');
    flashItems.forEach(function (item) {
        showToast(item.dataset.category, item.dataset.message);
    });
});


// ── Toast factory ─────────────────────────────────────────────────────
function showToast(category, message) {
    const tickSrc = document.getElementById('img-tick').dataset.src;
    const deleSrc = document.getElementById('img-dele').dataset.src;

    const isSuccess = (category === 'success');
    const imgSrc    = isSuccess ? tickSrc : deleSrc;
    const toastClass = isSuccess ? 'toast toast-success' : 'toast toast-delete';

    const toast = document.createElement('div');
    toast.className = toastClass;
    toast.innerHTML =
        '<img src="' + imgSrc + '" alt="' + (isSuccess ? 'success' : 'deleted') + '" class="toast-icon">' +
        '<span class="toast-message">' + message + '</span>' +
        '<button class="toast-close" onclick="dismissToast(this.parentElement)">&#x2715;</button>';

    document.getElementById('toast-container').appendChild(toast);

    // Slide in
    setTimeout(function () { toast.classList.add('toast-show'); }, 10);

    // Auto-dismiss after 3.5 s
    setTimeout(function () { dismissToast(toast); }, 3500);
}

function dismissToast(toast) {
    toast.classList.remove('toast-show');
    setTimeout(function () {
        if (toast.parentElement) toast.remove();
    }, 400);
}
