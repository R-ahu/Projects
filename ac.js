window.onload = function () {
    setTimeout(() => {
        document.querySelector(".welcome-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 3000);
};

function calculateAttendance() {
    let n = parseInt(document.getElementById("attended-classes").value);
    let m = parseInt(document.getElementById("total-classes").value);
    let result = document.getElementById("result");
    let extra = document.getElementById("extra-classes");

    if (isNaN(n) || isNaN(m) || m < n) {
        result.innerHTML = "Invalid Data";
        extra.innerHTML = "";
        return;
    }

    let attendance = (100 * n) / m;
    result.innerHTML = `Your attendance: ${attendance.toFixed(2)}%`;

    let requiredClasses = Math.ceil((75 * m - 100 * n) / 25);
    extra.innerHTML = attendance < 75 ? `You need to attend ${requiredClasses} more classes for 75%` : "You are above 75%.";
}

function calculateAfterSkipping() {
    let n = parseInt(document.getElementById("attended-classes2").value);
    let m = parseInt(document.getElementById("total-classes2").value);
    let l = parseInt(document.getElementById("skip-classes").value);
    let result = document.getElementById("result2");
    let extra = document.getElementById("extra-classes2");

    if (isNaN(n) || isNaN(m) || isNaN(l) || m < n) {
        result.innerHTML = "Invalid Data";
        extra.innerHTML = "";
        return;
    }

    let newTotal = m + l;
    let newAttendance = (100 * n) / newTotal;
    result.innerHTML = `Your attendance after skipping: ${newAttendance.toFixed(2)}%`;

    let requiredClasses = Math.ceil((75 * newTotal - 100 * n) / 25);
    extra.innerHTML = newAttendance < 75 ? `You need to attend ${requiredClasses} more classes for 75%` : "You are above 75%.";
}