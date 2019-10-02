var broker = true;
var subscribedTopic= [];
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();

$(document).ready(function(){
		$("#btnConnect").click(function(event){
      event.preventDefault();
				client = mqtt.connect($("#address").val())
				client.on("connect", function(){
						$("#status").text("Successfully connected!");
				}) 
				client.on("message", function (topic, payload) {
					$("table").append("<tr><td>" + topic + "</td><td>" + payload +'</td><td>' + time + "</td></tr>")
				})
		})
})

$(document).ready(function(){
	$("#btnDisconnect").click(function(event){
    event.preventDefault();
		client.end();
		$("#status").text("Disconnected!");
		$("table").text(null);
	})
})

$(document).ready(function(){
	$("#btnSubscribe").click(function(event){
    event.preventDefault();
			client.subscribe($("#Subscribe-topic").val());
			$("#span").text("subscribed!");
			client.on("message", function (topic, payload) {
				(topic , payload)
			broker = true;
			for (var e in subscribedTopic){
				if (!e == $("#Subscribe-topic").val()){
					console.log('hi');
				}
			}
	})
})
})
$(document).ready(function(){
		$("#btnPublish").click(function(event){
      event.preventDefault();
			client.publish($("#Publish-topic").val(),$("#Publish-payload").val());
			console.log( $("Publish-topic").val()+ " : " + $("#Publish-payload").val() + " " + time);
		})
})


$(document).ready(function(){
	$("#btnUnsubscribe").click(function(event){
    event.preventDefault();
		messaged = false;
		broker = false;
		client.unsubscribe($("#Subscribe-topic").val());
		$("#status").text("unsubscribed!");
	})
})
