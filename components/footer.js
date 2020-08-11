export default function Footer() {
    return (
        <div>
            <p>Michela Iacobucci | Full Stack Web Developer</p>
            <p className="email">I'd love to hear from you: miacobucci@gmail.com</p>
            <style jsx>
                {`
                p{
                    color: white;
                    font-weight: 1000;
                },
                .email{
                    font-weight: 200;
                }`}
            </style>
        </div>
    )
}