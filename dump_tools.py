import subprocess
import json

def test_notebooklm_mcp():
    cmd = ["python", "-m", "notebooklm_mcp.server"]
    process = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stdin=subprocess.PIPE,
        text=True
    )

    init_req = {
        "jsonrpc": "2.0",
        "id": 1,
        "method": "initialize",
        "params": {
            "protocolVersion": "2024-11-05",
            "capabilities": {},
            "clientInfo": {"name": "test", "version": "1.0"}
        }
    }
    
    process.stdin.write(json.dumps(init_req) + "\n")
    process.stdin.flush()
    process.stdout.readline()
    
    init_notif = {"jsonrpc": "2.0", "method": "notifications/initialized", "params": {}}
    process.stdin.write(json.dumps(init_notif) + "\n")
    process.stdin.flush()

    tools_req = {"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}}
    process.stdin.write(json.dumps(tools_req) + "\n")
    process.stdin.flush()
    
    with open("mcp_tools.json", "w") as f:
        while True:
            line = process.stdout.readline()
            if not line: break
            try:
                resp = json.loads(line)
                if resp.get("id") == 2:
                    json.dump(resp, f, indent=2)
                    break
            except:
                pass
    process.terminate()

test_notebooklm_mcp()
