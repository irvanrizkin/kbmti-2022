<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddStatusToStaffMudas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('staff_mudas', function (Blueprint $table) {
            $table->enum("status", ["pass", "pending", "failed"])->default("pending")->after("berkas_link");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('staff_mudas', function (Blueprint $table) {
            $table->dropColumn("status");
        });
    }
}
