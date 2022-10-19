<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegisterStaffMudaRequest;
use App\Models\StaffMuda;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;

class StaffMudaController extends Controller
{
    public function index()
    {
        return Inertia::render('Sth/RegisterStaffMuda');
    }
    public function store(RegisterStaffMudaRequest $request)
    {
        $validated = $request->validated();
        $staff = StaffMuda::create($validated);
        if (!$staff) {
            return \redirect(route("staff-muda.index"))->with("error", "Error while registering");
        }

        return \redirect()
            ->route("staff-muda.index")
            ->with("success", "Selamat! Anda telah berhasil registrasi staff muda KBMTI.");
    }
    public function announcements()
    {
        return Inertia::render("Sth/StaffMudaAnnouncement");
    }

    public function show($nim)
    {
        $staffMuda = StaffMuda::where("nim", $nim)->first();
        if (!$staffMuda) {
            return back()
                ->with("error", "Maaf, kamu tidak terdaftar pada peserta staff muda KBMTI 2022.");
        }
        return inertia("Sth/StaffMudaAnnouncement", ["staff_muda" => $staffMuda]);
    }
}
