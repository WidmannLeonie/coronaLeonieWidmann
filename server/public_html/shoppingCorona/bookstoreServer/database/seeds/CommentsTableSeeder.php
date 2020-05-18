<?php

use Illuminate\Database\Seeder;

class CommentsTableSeeder extends Seeder
{

    public function run()
    {
        $comment = new \App\Comments;
        $comment->text = 'Ich bin ein Kommentar zu Merkur';
        $comment->lists_id = 1;
        $comment->created_at = date("Y-m-d H:i:s");
        $comment->updated_at = date("Y-m-d H:i:s");
        $comment->save();

        $comment2 = new \App\Comments;
        $comment2->text = 'Ich bin ein Kommentar zu Spar';
        $comment2->lists_id = 2;
        $comment2->created_at = date("Y-m-d H:i:s");
        $comment2->updated_at = date("Y-m-d H:i:s");
        $comment2->save();

        $comment3 = new \App\Comments;
        $comment3->text = 'Ich bin ein Kommentar zu Billa';
        $comment3->lists_id = 3;
        $comment3->created_at = date("Y-m-d H:i:s");
        $comment3->updated_at = date("Y-m-d H:i:s");
        $comment3->save();
    }
}
