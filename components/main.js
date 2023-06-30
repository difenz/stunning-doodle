gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true
  })

  gsap.fromTo('.main-title', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.main-title',
      start: '.main-text',
      end: '300',
      scrub: true,
    }
  })

  gsap.fromTo('.top', {x: -150, opacity: 0 }, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.btns',
      start: '.top',
      end: '100',
      scrub: true,
    }
  })

let itemsL = gsap.utils.toArray('.gallery-left .gallery__item')

itemsL.forEach(item => {
  gsap.fromTo(item, {x: -150, opacity: 0}, {
    opacity: 1, x:20,
    scrollTrigger: {
      trigger: item,
      start: '-700',
      end: '-50',
      scrub: true
    }
  })
})

let itemsR = gsap.utils.toArray('.gallery-right .gallery__item')

itemsR.forEach(item => {
  gsap.fromTo(item, {x: 150, opacity: 0}, {
    opacity: 1, x:20,
    scrollTrigger: {
      trigger: item,
      start: '-500',
      end: '-50',
      scrub: true
    }
  })
})

gsap.fromTo('.philotitle', {x: -150, opacity: 0 }, {
  opacity: 1, x: 0,
  scrollTrigger: {
    trigger: '.typeEnd',
    start: '.philotitle',
    end: '300',
    scrub: true,
  }
})


gsap.fromTo('.gallery', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.itemsBtn',
    start: '-300',
    end: '0',
    scrub: true,
  }
})

gsap.fromTo('.opacity-text', {x: -150, opacity: 0 }, {
  opacity: 1, x: 0,
  scrollTrigger: {
    trigger: '.typeEnd',
    start: '.philotitle',
    end: '500',
    scrub: true,
  }
})

gsap.fromTo('.typeOf', {x: -150, opacity: 0 }, {
  opacity: 1, x: 0,
  scrollTrigger: {
    trigger: '.itemsBtn',
    start: '.typeflex',
    end: '300',
    scrub: true,
  }
})


let typeOfWork = gsap.utils.toArray('.typeOfWorkLine .typeflex')

typeOfWork.forEach(item => {
  gsap.fromTo(item, {x: -450, opacity: 0}, {
    opacity: 1, x:0,
    scrollTrigger: {
      trigger: item,
      start: '-500',
      end: '-250',
      scrub: true
    }
  })
})

gsap.fromTo('.typeflex', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.typeEnd',
    start: '-300',
    end: '0',
    scrub: true,
  }
})


gsap.fromTo('.philosophy', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.opacity-text',
    start: '0',
    end: '800',
    scrub: true,
  }
})

gsap.fromTo('.findCreateGo', { opacity: 1 }, {
  opacity: 0,
  scrollTrigger: {
    trigger: '.findCreateGo',
    start: '-300',
    end: '500',
    scrub: true,
  }
})


}

