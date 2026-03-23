import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, phone } = body;

    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert into Supabase clients table (The Metal Boundary)
    const { data, error } = await supabase
      .from('clients')
      .insert([
        {
          first_name,
          last_name,
          email,
          phone: phone || null,
          // last_contact_date will default to NOW() on the database level
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase Insert Error:', error);
      // Handle unique constraint on email
      if (error.code === '23505') {
        return NextResponse.json(
            { error: 'Email already registered.' },
            { status: 409 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to insert client record' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, client: data }, { status: 201 });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
