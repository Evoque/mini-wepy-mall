
import leftPad from 'left-pad';


function leftPadWithTwo(val) {
    return leftPad(val, 2, '0');
}

function getCurrentTime() {
    let keep = '';
    const date = new Date();
    const y = date.getFullYear();
    const m = leftPadWithTwo(date.getMonth() + 1);
    const d = leftPadWithTwo(date.getDate());
    const h = leftPadWithTwo(date.getHours());
    const min = leftPadWithTwo(date.getMinutes());
    const s = leftPadWithTwo(date.getSeconds());
    keep = '' + y + m + d + h + min + s;
    return keep;
}

export { getCurrentTime };