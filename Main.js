function toggleDropdown(button) {
            const content = button.nextElementSibling;
            const arrow = button.querySelector('.arrow');
            
            // Close all other dropdowns
            const allContents = document.querySelectorAll('.dropdown-content');
            const allArrows = document.querySelectorAll('.arrow');
            const allHeaders = document.querySelectorAll('.dropdown-header');
            
            allContents.forEach((item, index) => {
                if (item !== content) {
                    item.classList.remove('open');
                    allArrows[index].classList.remove('rotated');
                    allHeaders[index].classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            content.classList.toggle('open');
            arrow.classList.toggle('rotated');
            button.classList.toggle('active');
        }

        // Optional: Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const container = document.querySelector('.container');
            if (!container.contains(event.target)) {
                const allContents = document.querySelectorAll('.dropdown-content');
                const allArrows = document.querySelectorAll('.arrow');
                const allHeaders = document.querySelectorAll('.dropdown-header');
                
                allContents.forEach((item, index) => {
                    item.classList.remove('open');
                    allArrows[index].classList.remove('rotated');
                    allHeaders[index].classList.remove('active');
                });
            }
        });