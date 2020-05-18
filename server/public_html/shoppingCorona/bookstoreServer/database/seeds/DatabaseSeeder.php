<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(ListTableSeeder::class);
        $this->call(ItemTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(AddressTableSeeder::class);

    }

}
