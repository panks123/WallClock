setInterval(()=>{
    const date = new Date()

    const hrs = date.getHours()
    const mints = date.getMinutes()
    const seconds = date.getSeconds()

    const hhand=document.querySelector('.hhand')
    const mhand=document.querySelector('.mhand')
    const shand=document.querySelector('.shand')

    // Code for Rotating Hour hand

       // Rotation due to hours

    // 12 hrs --> 360°
    // 1 hr  --> 360°/12 = 30°

       // Rotation due to hours

    // 60 minutes --> 30°
    // 1 minute --> 30°/60 = 1/2°

    let hrs_rotate = 30 * hrs + (1/2) * mints
    hhand.style.transform = `rotate(${hrs_rotate}deg)`

    // Code for Rotating Minute hand

    // 60 minutes --> 360°
    // 1 minute --> 360°/60 = 6°

    let mnts_rotate = 6 * mints
    mhand.style.transform = `rotate(${mnts_rotate}deg)`

    // Code for Rotating Second hand

    // 60 seconds --> 360°
    // 1 seconds --> 360°/60 = 6°

    let second_rotate = 6 * seconds
    shand.style.transform = `rotate(${second_rotate}deg)`

},1000)