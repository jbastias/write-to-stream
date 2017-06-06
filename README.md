# write-to-stream

### testing many node process to the same using steams

```
cd /path/to/write-to-stream

# get help
node index.js --help
Options:
  --name, -n          script name                                 [default: "1"]
  --filepath, -f      file path                          [default: "./file.log"]
  --iterations, -i    iterations                                  [default: 100]
  --milliseconds, -m  intervals in milliseconds                  [default: 1000]
  --help              Show help                                        [boolean]
  --version           Show version number                              [boolean]

# run many at that same time
node . --name a & \
node . --name b & \
node . --name c & \
node . --name d & \
node . --name e & \
node . --name f & \
node . --name g & 

```