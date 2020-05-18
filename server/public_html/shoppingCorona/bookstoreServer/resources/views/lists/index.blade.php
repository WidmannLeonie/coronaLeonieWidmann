<DOCTYPE html>
    <html>
    <head>
        <title>Index_Blade</title>
    </head>
    <body>
    <h1>Listen</h1>
    <ul>
        @foreach($lists as $list)
            <li>
                <a href="lists/{{$list->id}}">{{$list->name}}</a>
            </li>
            @endforeach
    </ul>
    </body>
    </html>
</DOCTYPE>
