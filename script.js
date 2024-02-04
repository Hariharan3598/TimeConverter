function convertToJst(indianTime){
    let [hours, minutes] = indianTime.split(':').map(Number);
    let istDefault = 5 * 60 + 30;
    let jstDefault = 9 * 60;
    let totalMinutes = hours * 60 + minutes;
    let jstTime = (totalMinutes - istDefault + jstDefault) % (24*60);
    let jstHours = Math.floor(jstTime / 60);
    let jstMinutes = Math.round(jstTime % 60);
    return `${String(jstHours).padStart(2, '0')}:${String(jstMinutes).padStart(2, '0')}`;
}

document.getElementById("btn").addEventListener('click', (e) => {
    e.preventDefault();
    let iST = document.getElementById("ist").value;
    let jst = document.getElementById("jst");

    if(iST){
        console.log(iST);
        let jstTime = convertToJst(iST);
        jst.textContent = `Indian Time: ${iST} | Japan Time: ${jstTime}`;
    }else{
        alert("Please Enter valid Time");
    }
})
