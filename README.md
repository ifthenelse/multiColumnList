MultiColumnList
===============

MultiColumnList automatically creates multi column lists out of <ul> elements.
It depends on the Mootools (1.2+ framework) but can easily be decoupled for other javascript frameworks.

Usage
-----

Create (or generate) a list like this:

	<ul class="columnList columnAmount[4]">
		<li>content here..</li>
		etc..
	</ul>

At the bottom of your page place:

	<script type="text/javascript">
		new multiColumnList();
	</script>