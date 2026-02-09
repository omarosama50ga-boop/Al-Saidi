
        // إخفاء شاشة التحميل بعد تحميل الصفحة
        window.addEventListener('load', function() {
            setTimeout(function() {
                const loader = document.getElementById('loader');
                loader.classList.add('hidden');
                
                // تفعيل الأنيميشن لعناصر المنيو بعد التحميل
                const menuItems = document.querySelectorAll('.menu-item');
                menuItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate');
                    }, index * 150); // تأخير تدريجي لكل عنصر
                });
            }, 800);
        });

        // التحكم في زر الانتقال للأعلى
        const scrollTopBtn = document.getElementById('scrollTop');
        
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('active');
            } else {
                scrollTopBtn.classList.remove('active');
            }
        });
        
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // تأثير عند تمرير الماوس فوق عناصر المنيو
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.zIndex = '10';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.zIndex = '1';
            });
        });

        // تأثيرات عند التمرير
        window.addEventListener('scroll', function() {
            // تأثيرات على العناصر حسب موقعها
            menuItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                const itemVisible = 150;
                
                if (itemTop < window.innerHeight - itemVisible) {
                    item.classList.add('animate');
                }
            });
        });

        // تفعيل تأثيرات العناصر عند التحميل
        document.addEventListener('DOMContentLoaded', function() {
            // التأكد من أن الصفحة تبدأ من الأعلى
            window.scrollTo(0, 0);
        });