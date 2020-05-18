<?php

use Illuminate\Database\Seeder;

class ItemTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $item = new \App\Item();
        $item->description = 'Bananen';
        $item->max_price = 5;
        $item->amount = 5;
        $item->created_at = date("Y-m-d H:i:s");
        $item->updated_at = date("Y-m-d H:i:s");
        $item->lists_id = 1;
        $item->save();

        $item1 = new \App\Item();
        $item1->description = 'Brot';
        $item1->max_price = 3;
        $item1->amount = 2;
        $item1->created_at = date("Y-m-d H:i:s");
        $item1->updated_at = date("Y-m-d H:i:s");
        $item1->save();

        $item2 = new \App\Item();
        $item2->description = 'Schokolade';
        $item2->max_price = 4;
        $item2->amount = 1;
        $item2->created_at = date("Y-m-d H:i:s");
        $item2->updated_at = date("Y-m-d H:i:s");
        $item2->save();

        $item3 = new \App\Item();
        $item3->description = 'Milch';
        $item3->max_price = 3;
        $item3->amount = 1;
        $item3->created_at = date("Y-m-d H:i:s");
        $item3->updated_at = date("Y-m-d H:i:s");
        $item3->save();

        $item4 = new \App\Item();
        $item4->description = 'Mehl';
        $item4->max_price = 13;
        $item4->amount = 10;
        $item4->created_at = date("Y-m-d H:i:s");
        $item4->updated_at = date("Y-m-d H:i:s");
        $item4->save();
    }

}
