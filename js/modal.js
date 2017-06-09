function launchModal(team) {
  document.getElementById("shader").style.display = "block";
  if (team === "dsyfer") {
    document.getElementById("modal-title").innerHTML = "Dsyfer";
    document.getElementById("modal-img").src = "img/winners/dsyfer.jpg";
    document.getElementById("modal-text").innerHTML = "TeamSoylent, with members Mehul Ajith and Mohamed Sudheer, created a great application to help people with difficulty reading which landed them first place at our event. Their application, Dsyfer (pronounced like decipher), took a picture of text and converted it into a very accurate voiceover of the text. One of the most impressive aspects of this app was its’ ability to overcome different variables such as glare or reflections through machine learning. The team created this application with their friend with Dyslexia in mind, and wanted to create an application that would help people like him read text. The application was very practical, and the judges saw that. The use of machine learning and the sheer speed of their app helped them win first place at Chicago Hacks.";
  }
  if (team === "raindrop") {
    document.getElementById("modal-title").innerHTML = "RainDrop";
    document.getElementById("modal-img").src = "img/winners/raindrop.jpg";
    document.getElementById("modal-text").innerHTML = "Team Blue (Taran Nelavelli, Aaron Gros, Ryan Matus, Arkadiy Gertsman) took 2nd place with their beautiful weather app, RainDrop. They created a weather app that allowed the user to quickly check the maximum and minimum temperature through the use of a complex algorithm. The application sends a notification if the min and max temperature have a substantial difference in temperature. The group is looking to improve their app by tracking the CO2 emissions in the area and giving more personalized weather brackets to the user. The groups sleek and appealing user interface, along with the great user experience made this app a top runner in the competition.";
  }
  if (team === "pidog") {
    document.getElementById("modal-title").innerHTML = "PiDog";
    document.getElementById("modal-img").src = "img/winners/pidog.jpg";
    document.getElementById("modal-text").innerHTML = "Team PiDogs, with team members Mark Muranov and Nick Lyubenko, took 3rd place with their robot and software that helps those with special needs navigate around. They built their own robot and created voice activated software that sends commands to a server that processes the picture using supervised machine learning, feed forwards, and a neural network to help the robot navigate the environment. The PiDog is supposed to be a cheap and effective alternative to service dogs. The group made a neural net from scratch and trained the robot to follow a coke can. The impressive use of hardware, image processing, and a neural net showed everyone just how advanced the system was, and that led to the PiDog taking a strong third place in the competition.";
  }
  if (team === "happy") {
    document.getElementById("modal-title").innerHTML = "The Happiness Generator";
    document.getElementById("modal-img").src = "img/winners/happy.jpg";
    document.getElementById("modal-text").innerHTML = "Team members Cecily Kaufmann, Michael Kaufmann, and David Heiser created a Google Chrome extension called The Happiness Generator to win the Hack Harassment prize. Their team endeavored to end internet harassment one word at a time by locating offensive words and replacing them with kinder alternatives. The extension is especially useful in messaging: instead of seeing harmful comments, the user receives transformed  positive language. The extension was built in JavaScript and jQuery and works on all forms of text on a webpage. Built to protect the user from the harsh reality of internet harassment, the Happiness Generator enables safe, happy surfing. The Next Gen is HappyGen.";
  }
  if (team === "chrome") {
    document.getElementById("modal-title").innerHTML = "Chrome Guardian";
    document.getElementById("modal-img").src = "img/winners/chrome.jpg";
    document.getElementById("modal-text").innerHTML = "Team SHIELD (Adam Kuhn, Nathan Rogers, Jack Thompson, John Ford) won the Domain.com prize with their Google Chrome extension called Chrome Guardian which helps children discover the internet safely. Parents are often very nervous when it comes to letting their child use the internet, knowing that there is some bad stuff out there. Team SHIELD’s extension allows kids to safely traverse the internet by blocking websites with content the parent may not want their child to see. The extension has certain blacklisted pages, which can be expanded as needed. There is also a feature that scans the web page for vulgar words, and if detected, the page is whited out to prevent the child from seeing the content. The team plans on adding more features, including a more extensive database of blacklisted sites and a more sophisticated word detection system.";
  }
}

function closeModal() {
  var modal = document.getElementById('shader');
  modal.style.display = "none";
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) {
        closeModal()
    }
});
