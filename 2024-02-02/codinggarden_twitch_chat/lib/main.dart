import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:twitch_chat/twitch_chat.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<StatefulWidget> createState() {
    return _MyMainAppState();
  }
}

class Message {
  String username;
  String content;

  Message(this.username, this.content);
}

class _MyMainAppState extends State<MainApp> {
  var title = 'Twitch Chat WOW!';
  final _scrollController = ScrollController();
  final List<Message> _messages = [];

  @override
  void initState() {
    super.initState();
    print("INIT STATE!");
    TwitchChat twitchChat = TwitchChat(
      'codinggarden',
      'justinfan1243',
      '',
      onConnected: () {
        print("CONNECTED!");
      }
    );

    twitchChat.connect();
    twitchChat.chatStream.listen((message) {
      var chatMessage = message as ChatMessage;
      _addMessage(Message(chatMessage.displayName, chatMessage.message));
    });
  }

  void _addMessage(Message message) {
    setState(() {
      _messages.add(message);
    });

    WidgetsBinding.instance.addPostFrameCallback((_) {
      _scrollController.animateTo(
        _scrollController.position.maxScrollExtent,
        duration: const Duration(milliseconds: 500),
        curve: Curves.easeOut,
      );
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      darkTheme: ThemeData.dark(),
      home: Scaffold(
        appBar: AppBar(
          title: Text(title),
        ),
        body: ListView.builder(
          controller: _scrollController,
          itemCount: _messages.length,
          itemBuilder: (context, index) {
            final item = _messages[index];

            return ListTile(
              title: Text(item.username),
              subtitle: Text(item.content),
            );
          },
        ),
      ),
    );
  }
}