// Create a timeline
var timeline = gsap.timeline();

// Add animations to the timeline
timeline.to(".element1", { x: 100, duration: 1 })
        .to(".element2", { y: 200, duration: 1 })
        .to(".element3", { opacity: 0, duration: 1 });
