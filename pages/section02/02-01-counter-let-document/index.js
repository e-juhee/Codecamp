export default function CounterLetDocumentPage(){
    
    function onClickCountUp () {
        let count = Number(document.getElementById("count").innerText) + 1;
        document.getElementById("count").innerText = count;
    }

    function onClickCountDown () {
        let count = Number(document.getElementById("count").innerText) - 1;
        document.getElementById("count").innerText = count;
    }
 
    return (
        <div>
            <div id="count">0</div>
            <button onClick={onClickCountUp}>Up</button>
            <button onClick={onClickCountDown}>Down</button>
        </div>
    )
}