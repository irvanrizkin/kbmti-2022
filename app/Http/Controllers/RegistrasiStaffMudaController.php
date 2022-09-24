<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class RegistrasiStaffMudaController extends Controller
{
    public function index()
    {
        return Inertia::render('Sth/RegisterStaffMuda');
    }
}
