const arr = [1, ,2 ,3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const evenNums = [];

for(i in arr) {
	if(i %2 !== 0) {
		continue;
	}
	evenNums.push(i);
	console.log(evenNums);
	
	if(evenNums.length === 5) {
		break;
	}
}