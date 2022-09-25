@font-face { font-family: 'BMJUA'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff'); font-weight: normal; font-style: normal; }
@keyframes done {
    70% {
        transform: scale(1.2)
    }
    100% {
        transform: scale(1)
    }
}

html {
    font-family: BMJUA
}

*, ::before, ::after {
    box-sizing: border-box
}

body, div, button, h1 {
    font: inherit;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    background: 0
}



#title {
    font-size: 18px;
    margin: 2rem 0;
    height: 46px;
}

#wrapper {


    background-image: url('./lottoimg.png');
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position-x: center;
    background-position-y: 110px;
    padding: 70px; 
    background-repeat: no-repeat;
    height: 739px;
    background-attachment: fixed;
}

#numbers {
    margin-bottom: 20px;
    padding: 30px;
    border: 0px solid rgb(0 0 0 / 3%);
    text-align:center;
}

#lotto-title{
    height: 60px;
    font-size: 30px;
    font-weight: bold;
}

#whatisdate{
    font-family: emoji;
    letter-spacing: 3px;
    height: 49px;
    font-size: 21px;
    line-height: 98px;
    font-weight: 600;
}

#qrcode {
    width:160px;
    height:160px;
    margin-top:15px;
  }

.deadline{
    text-align: left;
    margin: 19px;
    font-size: 14px;
    padding: 0px;
    font-family: inherit;
    letter-spacing: 2px;
    text-indent: -20px;
    height: 34px;
}

.rannum{
    font-size: 12px;
    letter-spacing: 2px;
    text-indent: -8px;
}

.ranco{
    font-size: 12px;
    letter-spacing: 1px;
    text-indent: -9px;
    word-spacing: 77px;
    height: 5px;
}

.lotto-list {
    display: block;
}

.lotto-listA {
    height: 27px;
}

.list-sum{
    margin: -36px;
    height: 192px;
    font-size: 1px;
    outline: 3px;
    line-height: 0px;
    position: relative;
    left: -3px;
}

.구분선1 {

        margin: 0px;
        height: 17px;
        letter-spacing: 0px;
        position: relative;
        left: -11px;
    
}

.구분선2 {
    margin: 8px;
        height: 2px;
        letter-spacing: 0px;
        position: relative;
        left: -11px;
    
}

.금액 {
    word-spacing: 176px;
    font-size: 20px;
    position: relative;
    left: -9px;
    font-family: inherit;
    font-weight: bold;
}


.ball {
    width: 28px;
    height: 45px;
    line-height: 80px;
    border-radius: 50%;

    margin-right: 10px;
    font-size: 18px;
    text-align: center;
    display: inline-block;
    font-family: inherit;
    position: relative;
    right: -2px;
}

.lotto-A {
    height: 45px;
    line-height: 87px;
    border-radius: 52%;
    margin-right: 13px;
    font-size: 15px;
    display: inline-block;
    letter-spacing: 1px;
    font-family: inherit;
    letter-spacing: -9px;
}

.lotto-tag {
    height: 45px;
    line-height: 80px;
    border-radius: 50%;

    margin-right: 10px;
    font-size: 15px;
    text-align: center;
    display: inline-block;
    letter-spacing: 1px;
    font-family: inherit;
}
#lotto-2-button {
    position: relative;
    display: block;
    padding: 1rem 2.5rem 1.6rem;
    background: #fff;
    color: #666;
    border: 2px solid #666;
    border-radius: 6px;
    overflow: hidden;
    transition: .5s;
    user-select: none
}

#lotto-2-button:hover {
    padding: 1rem 2.5rem 1rem;
    margin-top: .6rem;
    background: #999;
    color: #fff
}

#lotto-2-button::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    height: .6rem;
    width: 100%;
    background-image: repeating-linear-gradient(45deg, #666, #666 1px, transparent 2px, transparent 5px);
    border-top: 1px solid #666;
    transition: .5s
}

#lotto-2-button:hover::after {
    transform: translateY(.6rem)
}

#lotto-2-button.hide {
    transform: scale(0)
}

@media screen and (max-width: 800px) {
    #numbers {
        flex-direction: column;
        align-items: center;
    }

    #numbers .ball {
        width: 22px;
        font-size: 18px;
        margin-right: 0;
        margin-bottom: 10px
    }

    #numbers .lotto-tag {
        width: 35px;
        font-size: 16px;
        margin-right: 0;
        margin-bottom: 10px
    }

    .lotto-list {
        height: 38px;
        text-indent: -17px;
    }

    #publish-day{
        font-size: 12px;
    }

    #raffle-day{
        font-size: 12px;
    }
    
    #payments-day{
        font-size: 12px;
    }

    #lotto-title{
        font-size: 25px;
    }
    
    #whatisdate{
        font-size: 21px;
    }

    #numbers .ball:last-child {
        margin-bottom: 0
    }

    
}
