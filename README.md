MultiColumnList
===============

MultiColumnList automatically creates multi column lists out of ul elements.
It depends on the Mootools (1.2+ framework) but can easily be decoupled for other javascript frameworks.

Usage
-----

Create (or generate) a list like this:

	<ul class="columnList columnAmount[4]">
		<li>content here..</li>
		etc..
	</ul>

Set a width for the columns in CSS

	/* for all instances */
	.columnList li {
		width: 220px;
	}

	/* for specific instances */
	#myList li {
		width: 350px;
	}

At the bottom of your page place:

	<script type="text/javascript">
		new multiColumnList();
	</script>