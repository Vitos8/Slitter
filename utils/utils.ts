export const getLoaderSize = (size:string) => {
	switch (size) {
		case "lg":
			return '80';
			break;
		case "md": 
			return '50';
			break;
		case "s":
			return '30';
			break;
		default:
			return '50';
			break;
	}
}