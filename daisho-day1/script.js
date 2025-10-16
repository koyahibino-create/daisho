const helloBtn=document.getElementByld("helloBtn");
const message=document.getElementByld("message");

helloBtn.addEventListerner("click",()=> {
    const hour=new Date().getHours();
    let greeting="こんにちは！";

    if (hour<12){
        greeting="おはようございます！";
    }else if (hour=>18){
        greeting="こんばんは！";
    }

    message.textcontent='${greeting} GitHub Pages の公開に成功しました！';
});