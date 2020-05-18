<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $user = new \App\User;
        $user->name = 'Anna P.';
        $user->email = 'test@anna.at';
        $user->password = bcrypt('secret');
        $user->isVolunteer = false;
        $user->created_at = date("Y-m-d H:i:s");
        $user->updated_at = date("Y-m-d H:i:s");
        $user->save();

        $user2 = new \App\User;
        $user2->name = 'Klaus F.';
        $user2->email = 'test@klaus.at';
        $user2->password = bcrypt('secret');
        $user2->isVolunteer = true;
        $user2->created_at = date("Y-m-d H:i:s");
        $user2->updated_at = date("Y-m-d H:i:s");
        $user2->save();

    }
}
