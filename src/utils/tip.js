
import wepy from 'wepy';
export default class Tip {
    constructor() {
        this.isLoading = false;
    }

    static success(title, duration = 500) {
        setTimeout(() => {
            wepy.showToast({
                title: title,
                icon: "success",
                mask: true,
                duration
            });
        }, 300);

        if (duration > 0) {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve();
                }, duration);
            });
        }
    }

    static loading(title = '加载中...') {
        if (Tip.isLoading) return;
        Tip.isLoading = true;
        wepy.showLoading({ title, mask: true });
    }

    static loaded() {
        if (Tip.isLoading) {
            Tip.isLoading = false;
            wepy.hideLoading();
        }
    }

}

Tip.isLoading = false;