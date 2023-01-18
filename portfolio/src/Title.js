import React from 'react';

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "come back :(";
})
window.addEventListener("focus", () => {
document.title = docTitle;
})

function Title () {
return (
    <div>
    </div>
)
}

export default Title;