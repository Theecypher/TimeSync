const OnboardMessage = () => {

    let checkbox = (
        <div>
            <div>
                <input type="radio" />
                <label htmlFor="">Individual</label>
            </div>
            <div>
                <input type="radio" />
                <label htmlFor="">For team</label>
            </div>
        </div>
    )

    const contents = [
        {
            title: "Welcome onboard!",
            content: "Let's make your working hours seamless and tailored for you",
            button: "Next"
        },
        {
            title: "What are your regular working hours",
            button: "Next"
        },
        {
            title: "Are you working individually or with a team",
            option: checkbox,
            button: "Next"
        },
        {
            title: "Registration complete",
            content: "Congratulations, your account is ready! Take control of your timeand boost your productivity.",
            button: "Start"
        },
    ]



    return { contents }
}
 
export default OnboardMessage;