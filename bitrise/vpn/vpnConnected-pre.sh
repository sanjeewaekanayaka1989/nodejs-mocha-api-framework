#!/bin/sh

## Connect to OpenVPN
bin/echo "Connected" > $BR_BITRISE_SOURCE_DIR/bitrise/vpn/status.txt

## Exit Script Gracefully
exit 0