import subprocess
import json

def query_notebooklm():
    cmd = ["python", "-m", "notebooklm_mcp.server"]
    process = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stdin=subprocess.PIPE,
        text=True
    )

    init_req = {"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2024-11-05", "capabilities": {}, "clientInfo": {"name": "test", "version": "1.0"}}}
    process.stdin.write(json.dumps(init_req) + "\n")
    process.stdin.flush()
    process.stdout.readline() 
    
    init_notif = {"jsonrpc": "2.0", "method": "notifications/initialized", "params": {}}
    process.stdin.write(json.dumps(init_notif) + "\n")
    process.stdin.flush()

    query = "List the EXACT step-by-step module names or stages for the 'Protocol 33: Program for Awakening'. Do not add any conversational filler. Just return the structured list of modules/steps based strictly on the uploaded materials."
    
    req = {"jsonrpc": "2.0", "id": 2, "method": "tools/call", "params": {"name": "notebook_query", "arguments": {"notebook_id": "0159101b-1eb0-4595-97aa-d5aed53f2d6c", "query": query}}}
    process.stdin.write(json.dumps(req) + "\n")
    process.stdin.flush()
    
    with open("query_modules.txt", "w", encoding="utf-8") as f:
        while True:
            line = process.stdout.readline()
            if not line: break
            f.write(line)
            if '"id": 2' in line or '"id":2' in line:
                break
    process.terminate()

if __name__ == "__main__":
    query_notebooklm()
