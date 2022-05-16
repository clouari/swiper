gsap.to(".box1", {
    duration: 3,
    x: 200,
    opacity: 0.8,
    ease: 'back(7.0)', y: 100,
});

gsap.to(".box2", {
    duration: 3,
    x: 200,
    rotate: 720,
    scale: 1.3
});

gsap.to(".box3", {
    duration: 3,
    x: 200,
    ease: 'elastic',
    backgroundColor: 'red',
    width: 300,
    fontSize: 60 
});