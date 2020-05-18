<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppinglistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lists', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->integer('final_sum');
            $table->date('due_date')->nullable();
            $table->string('name');
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->bigInteger('volunteer_id')->nullable();
            $table->boolean('completed')->default(false);
            $table->foreign('user_id')->references('id')
                ->on('users')->onDelete('cascade');


        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lists');
    }
}
