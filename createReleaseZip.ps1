New-Item -Path '.\release\WHFortyRP2E-FoundryVTT-master' -ItemType Directory

Copy-Item -Path ".\asset" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-Item -Path ".\css" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-Item -Path ".\lang" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-Item -Path ".\logo" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-Item -Path ".\packs" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-Item -Path ".\script" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-Item -Path ".\template" -Destination ".\release\WHFortyRP2E-FoundryVTT-master" -Recurse
Copy-item -Path ".\CONTRIBUTING.md" -Destination ".\release\WHFortyRP2E-FoundryVTT-master"
Copy-item -Path ".\README.md" -Destination ".\release\WHFortyRP2E-FoundryVTT-master"
Copy-item -Path ".\LICENSE" -Destination ".\release\WHFortyRP2E-FoundryVTT-master"
Copy-item -Path ".\system.json" -Destination ".\release\WHFortyRP2E-FoundryVTT-master"
Copy-item -Path ".\template.json" -Destination ".\release\WHFortyRP2E-FoundryVTT-master"

$compress = @{
	Path = ".\release\*"
	CompressionLevel = "Optimal"
	DestinationPath = ".\whfortyrp.zip"
}
Compress-Archive @compress

Remove-Item '.\release' -Recurse