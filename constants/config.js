// =================== URL APIs ============================
// ============= en caso de incluir traduccion ==================
export const randomNumber = (min_number = 1000000000, max_number = 9999999999, break_number) =>{
	let result;
	do {
		result = Math.floor(Math.random() * (min_number - max_number + 1)) + max_number;
	} while (break_number !== undefined && result === break_number);
	return result;
};
const validInt = (number) => {
	return number == null || isNaN(parseInt(number)) ? 0 : parseInt(number);
};
function bankerRounding(amount, decimalPlaces) {
	
	let decimal_places 			= decimalPlaces || 0;
	let potencia 				= Math.pow(10, decimal_places);
	let avoid_rounding_error 	= +(decimal_places ? amount * potencia : amount).toFixed(8); // Avoid rounding errors
	let int_rounding_error 		= Math.floor(avoid_rounding_error); 
	let decimal_rounding_error 	= avoid_rounding_error - int_rounding_error;
	let allow_rounding_error 	= parseFloat('1e-8'); // Allow for rounding errors in decimal_rounding_error
	
	let rounding_number 		= (decimal_rounding_error > 0.5 - allow_rounding_error && decimal_rounding_error < 0.5 + allow_rounding_error) ? ((int_rounding_error % 2 == 0) ? int_rounding_error : int_rounding_error + 1) : Math.round(avoid_rounding_error);
	
	return decimal_places ? rounding_number / potencia : rounding_number;
};
const formatCurrency = (amount, shopify_rounding = null, locale = "en-US", currency = "USD") => {
	
	if( !amount || amount == null || isNaN( parseFloat( amount ) ) || typeof amount == "string" ){
		
		return { format: "$0.00", number: 0 };
	}
	else{
		
		const formatterCurrency = new Intl.NumberFormat( locale, { style: 'currency', currency: currency, minimumFractionDigits: 2 } );
		const parts_format      = formatterCurrency.formatToParts( 1000 );
		
		let regexp_symbol               = new RegExp(`([${ parts_format[0].value }])`, "g");
		let regexp_separador_millares   = new RegExp(`([${ parts_format[2].value }])`, "g");
		let regexp_separador_decimal    = new RegExp(`([${ parts_format[parts_format.length - 2].value }])`, "g");
		
		if( shopify_rounding != null ){
			
			amount = ( shopify_rounding ? bankerRounding(amount, 2) : amount / 100 );
		}
		let format = formatterCurrency.format( amount );
		
		let number = parseFloat( format.replace( regexp_symbol, "").replace( regexp_separador_millares, "" ).replace( regexp_separador_decimal, "." ) );
		
		return { format, number };
	}
};
export const formatData = {
	validInt: validInt,
	currency: formatCurrency,
};
export const arrayHelpers = {
	sortArray ( array, data_sort, is_asc = 'asc' ){
		
		return array.length > 0 && array[0][data_sort] != undefined ? array.sort( (current_item, next_item) => { return compareSortObject(is_asc, data_sort, current_item, next_item); }) : array;
	},
	chunkArray ( array, chunk_size ){
		
		let results = [];
		while ( array.length ) {
			
			results.push( array.splice( 0, chunk_size ) );
		}
		return results;
	}
};