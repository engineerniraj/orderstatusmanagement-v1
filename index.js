var msg = new SpeechSynthesisUtterance();


let orderStatuses = document.getElementsByClassName('order-status-block')


const executeOrder = () => {
	let orderId = document.getElementById('order-id-input').value
	document.getElementById('order-id-input').value = ''
	document.getElementById('order-id-display').innerText = `Order Status for ID: ${orderId}`
	orderStatuses[0].classList.remove('btn-light')
	orderStatuses[0].classList.add('btn-success')

	chefReceived()
		.then(pizzaSauceAdded)
		.then(firstLayerOfCheezeAdded)
		.then(toppingsAdded)
		.then(secondLayerOfCheezeAdded)
		.then(pizzaBaked)
		.then(oreganoAddedAndPacked)
		.then(packageReceivedAtCounter)
		.then(() => {
			orderStatuses[9].classList.remove('btn-light')
			orderStatuses[9].classList.add('btn-success')
		})
		.catch((err) => console.log(err))
}
      
const chefReceived = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[1].classList.remove('btn-light')
			orderStatuses[1].classList.add('btn-success')
			resolve()
			msg.text = "Chef received the order and started preparing ";
            window.speechSynthesis.speak(msg);
		}, 2000)
		
	})	
}

const pizzaSauceAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[2].classList.remove('btn-light')
			orderStatuses[2].classList.add('btn-success')
			resolve()
			msg.text = " Pizza Sauce added";
            window.speechSynthesis.speak(msg);
		}, 10000)
		
	})
}

const firstLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[3].classList.remove('btn-light')
			orderStatuses[3].classList.add('btn-success')
			resolve()
			msg.text = " First layer of cheeze added";
            window.speechSynthesis.speak(msg);
		}, 5000)
		
	})
}

const toppingsAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[4].classList.remove('btn-light')
			orderStatuses[4].classList.add('btn-success')
			resolve()
			msg.text = "Toppings added ";
            window.speechSynthesis.speak(msg);
		}, 12000)
		
	})
}

const secondLayerOfCheezeAdded = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[5].classList.remove('btn-light')
			orderStatuses[5].classList.add('btn-success')
			resolve()
			msg.text = "Second layer of cheeze added ";
            window.speechSynthesis.speak(msg);
		}, 5000)
		
	})
}

const pizzaBaked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[6].classList.remove('btn-light')
			orderStatuses[6].classList.add('btn-success')
			resolve()
			msg.text = "Pizza baked! ";
            window.speechSynthesis.speak(msg);
		}, 15000)

	})
}

const oreganoAddedAndPacked = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[7].classList.remove('btn-light')
			orderStatuses[7].classList.add('btn-success')
			resolve()
			msg.text = "Oregano added and packed ";
            window.speechSynthesis.speak(msg);
		}, 8000)
		
	})
}

const packageReceivedAtCounter = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			orderStatuses[8].classList.remove('btn-light')
			orderStatuses[8].classList.add('btn-success')
			resolve()
			msg.text = "Package received at counter ";
            window.speechSynthesis.speak(msg);
		}, 2000)
	})
}

