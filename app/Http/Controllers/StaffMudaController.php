<?php

namespace App\Http\Controllers;

use App\Models\StaffMuda;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class StaffMudaController extends Controller
{
    public function index()
    {
        return Inertia::render('Sth/RegisterStaffMuda');
    }
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required|string|max:255",
            "nim" => "required|string|max:255|unique:staff_mudas",
            "angkatan" => "required|numeric",
            "no_hp" => "required|string|max:15",
            "id_line" => "required|string",
            "berkas_link" => "required|string",
        ]);

        $staff = StaffMuda::create([
            'name' => $request->name,
            'nim' => $request->nim,
            'angkatan' => $request->angkatan,
            'no_hp' => $request->no_hp,
            'id_line' => $request->id_line,
            'berkas_link' => $request->berkas_link,
        ]);
        if (!$staff) {
            return \redirect(route("staff-muda.index"))->with("error", "Error while registering");
        }

        return \redirect(route("staff-muda.index"))->with("success", "Selamat! Anda telah berhasil registrasi staff muda KBMTI.");
    }
}
