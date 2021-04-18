const ip = document.querySelectorAll('input');

ip.forEach(input => input.addEventListener('change', update));
ip.forEach(input => input.addEventListener('mousemove', update));

function update(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}