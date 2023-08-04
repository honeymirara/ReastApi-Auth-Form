const btn_one = document.querySelector('.btn-one');
btn_one.addEventListener('click', async () => {
    const usernameTag = document.querySelector('.username-input-reg input');
    const emailTag = document.querySelector('.email-input-reg input');
    const passwordTag = document.querySelector('.password-input-reg input');
    const user = {
        username: usernameTag.value,
        email: emailTag.value,
        pwd: passwordTag.value
    }

    console.log(user);

    try {
        const resultReg = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        console.log(resultReg.status);
        console.log(await resultReg.json());
    } catch (error) {
        console.error("Произошла ошибка при регистрации:", error);
    }
});

const btnTag = document.querySelector('.btn');
btnTag.addEventListener('click', async () => {
    const emailInpTag = document.querySelector('.email-input');
    const passwordInpTag = document.querySelector('.password-input');
    const user = {
        email: emailInpTag.value,
        pwd: passwordInpTag.value
    }
    console.log(user);

    try {
        const resultAuth = await fetch("http://localhost:3000/api/authorize", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        console.log(resultAuth.status);
        console.log(await resultAuth.json());
    } catch (error) {
        console.error("Произошла ошибка при авторизации:", error);
    }
});


