setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    document.getElementById("hour").style.transform = `rotate(${hrotation}deg)`;
    document.getElementById("minutes").style.transform = `rotate(${mrotation}deg)`;
    document.getElementById("second").style.transform = `rotate(${srotation}deg)`;
}, 1000);
