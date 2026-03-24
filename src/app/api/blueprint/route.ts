import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { first_name, last_name, email, phone, great_work, core_values, the_crux } = body;

    if (!first_name || !last_name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    let clientId;

    // Insert into Supabase clients table (The Metal Boundary)
    const { data: newClient, error: clientError } = await supabase
      .from('clients')
      .insert([
        {
          first_name,
          last_name,
          email,
          phone: phone || null,
        }
      ])
      .select()
      .single();

    if (clientError) {
      // Handle unique constraint on email
      if (clientError.code === '23505') {
        const { data: existingClient, error: fetchError } = await supabase
          .from('clients')
          .select('id')
          .eq('email', email)
          .single();
          
        if (fetchError) {
          console.error('Failed to fetch existing client:', fetchError);
          return NextResponse.json({ error: 'Failed to access returning profile' }, { status: 500 });
        }
        clientId = existingClient.id;
      } else {
        console.error('Supabase Client Insert Error:', clientError);
        return NextResponse.json(
          { error: 'Failed to insert client record' },
          { status: 500 }
        );
      }
    } else {
      clientId = newClient.id;
    }

    // Insert into blueprints table
    const { data: blueprint, error: blueprintError } = await supabase
      .from('blueprints')
      .insert([
        {
          client_id: clientId,
          great_work: great_work || null,
          core_values: core_values || null,
          the_crux: the_crux || null,
        }
      ])
      .select()
      .single();

    if (blueprintError) {
      console.error('Blueprint Insert Error:', blueprintError);
      return NextResponse.json(
        { error: 'Failed to insert blueprint record' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, blueprint }, { status: 201 });

  } catch (err) {
    console.error('API Error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
