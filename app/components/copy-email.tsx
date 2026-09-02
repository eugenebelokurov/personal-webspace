"use client"

export default function CopyEmailButton() {
  function handleCopyEmail() {
    navigator.clipboard.writeText("eo.belokurov@gmail.com")
    document.getElementById("emailButton")!.innerHTML="copied"
    setTimeout( () => {
        document.getElementById("emailButton")!.innerHTML="copy email"
    }, 1200)
  }

  return (
    <button 
      className="inline underline underline-offset-4 decoration-dotted"
      onClick={handleCopyEmail}
      id="emailButton"
    >
      <p>copy email</p>
    </button>
  )
}