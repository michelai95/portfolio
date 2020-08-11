export default function Image() {
    return (
        <div class="split-left">
            <div class="centered">
                <img src='static/wood.PNG.png'/>
            </div>
            <style jsx>
                {`img {
                    height: 725px;
                    width: 925px;
                    margin-top: -725px;
                }
               `}
            </style>
        </div>
    )
}