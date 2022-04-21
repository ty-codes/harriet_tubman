const quotes = [
	{ 
		id: 1,
		quote: '"I had reasoned this out in my mind; there was one of two things  i had a right to,liberty, or death, if i could not have one, I would have the other."'
	},
	{ 
		id: 2,
		quote: '"I ain’t got no heart to go and see the sufferings of my people played on the stage. I’ve heard ‘Uncle Tom’s Cabin’ read, and I tell you	Mrs. Stowe’s pen hasn’t begun to paint what slavery is as I have seen it at the far South. I’ve seen the real thing, and I don’t want to see it on no stage or in no theater."'
	},
	{ 
		id: 3,
		quote: '"God\'s time is always near. He set the North Star in the heavens; He gave me the strength in my limbs. He meant I should be free."'
	},
	{
		id: 4,
		quote: '"When I found i had crossed that line, I looked at my hands to see if i was the same person. There was such a glory over everything; the sun came like gold through trees, and over the fields, and i felt like i was in heaven."'
	},
	{
		id: 5,
		quote: '"I would make a home for them in the North, and the Lord helping me, I would bring them all here."'
	},
	{
		id: 6 ,
		quote: '"For no man should take me alive; I should fight for my liberty as long as my strength lasted, and when the time came for me to go, the Lord would let them take me."'
	},
	{
		id: 7,
		quote: '"I go to prepare a place for you."'
	}
]
const printlog = () => {
	console.log("click")
}
let num=0;

const next = (num) => {
	document.getElementById('prev_arrow').removeAttribute("disabled")
	if(num<7) {
		document.getElementById('quote').innerHTML = quotes[num].quote;
		if(num===6) {
			document.getElementById('next_arrow').setAttribute("disabled", true)
		}
	} else {
		return;
	}
}

const prev = (num) => {
	document.getElementById('next_arrow').removeAttribute("disabled")
	
	if(num<7) {
		
		document.getElementById('quote').innerHTML = quotes[num].quote;
		if(num===0) {
			document.getElementById('prev_arrow').setAttribute("disabled", true)
			document.getElementById('next_arrow').removeAttribute("disabled")
		}

	} else {
		return;
	}
}



document.getElementById("prev_arrow").addEventListener("click", ()=>{
	if(num<=6){
		num--;
			prev(num)
	
	}
})

document.getElementById("next_arrow").addEventListener("click", ()=> {
	if(num<=6){
		num++;
			next(num)
	}

}
)



