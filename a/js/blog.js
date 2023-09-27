$(function()
{
	$.getJSON("http://classiccars1970.blogspot.ie/feeds/posts/default?alt=json&callback=?&max-results=5", 
	function(data)
	{
		$.each(data["feed"]["entry"], 
		function(index, value)
		{
			$("<h1 style=\"color:red; border: 1px solid red;\"><b>" + value["title"]["$t"] + "</b></h1><p>" + value["content"]["$t"].replace(/<\/?[^>]+>/gi, "") + "</p>").appendTo("div#blogOutput");
		});
	});
});
