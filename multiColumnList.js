/**
 * Create multi column list from ul elements
 *
 * @author		Jasper van der Hoeven <jasper@bugbyte.nl>
 */
var multiColumnList = new Class(
{
	initialize: function()
	{
		$$('.columnList').each(function(ul) {
			this.columnize(ul, ul.get('class').replace(/[^0-9]*/g, '').toInt());
		}.bind(this));
	},

	/**
	 * add css classes to list elements for columnization
	 */
	columnize: function(ul, columnAmount)
	{
		//het the li amount of this list
		var liAmount = this.getLiAmount(ul);

		//determine the max amount of li's per column
		var maxItemsPerColumn = Math.ceil(liAmount / columnAmount);

		var counter = 1;
		ul.getChildren().each(function(li) {

			var liSize = li.getSize();

			//determine in which column this li resides
			var column = Math.ceil(counter / maxItemsPerColumn);
			if (counter != 1 && ((counter - 1) % maxItemsPerColumn == 0))
				li.setStyle('margin-top',  - maxItemsPerColumn * liSize.y);

			//set ul height
			if (counter == 1)
				ul.setStyle('height', maxItemsPerColumn * liSize.y);

			li.setStyle('margin-left', (column -1) * liSize.x);

			counter++;
		});
	},

	/**
	 * count number of li's inside ul
	 */
	getLiAmount: function(ul)
	{
		var amount = 0;
		ul.getChildren().each(function(li) { amount++; });
		return amount;
	}
});