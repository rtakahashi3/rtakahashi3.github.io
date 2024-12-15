const headings = document.querySelectorAll(".heading");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
        if (entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold: 1
}
)

headings.forEach(heading => {
    observer.observe(heading)
})

const scrollProgressElement = document.querySelector(".scroll-progress");

function scrollProgress() {
    const totalHeightOfPage = document.body.scrollHeight;
    const distanceFromTop = document.documentElement.scrollTop;

    const windowHeight = document.documentElement.clientHeight;

    const scrolledPercentage = 
    (distanceFromTop / (totalHeightOfPage - windowHeight)) * 100;

    scrollProgressElement.style.width = Math.round(scrolledPercentage) + "%";
}

document.addEventListener("scroll", scrollProgress);

gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray('.container');
  
sections.forEach((section) => {
    ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => gsap.to("header span", {text: section.dataset.pname, 
            color: section.dataset.color}),
        onEnterBack: () => gsap.to("header span", {text: section.dataset.pname,
            color: section.dataset.color}),
        onLeave: () => gsap.to("header span", {text: section.dataset.pname,
            color: section.dataset.color}),
        onLeaveBack: () => gsap.to("header span", {text: section.dataset.pname,
            color: section.dataset.color}),
    });
});
