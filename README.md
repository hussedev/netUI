# netUI

add to /etc/sudoers.d/nmap:
'''user''' ALL = (root) NOPASSWD: '''path to nmap'''

nmap -sT -p- 192.168.1.1
nc -z -v 10.10.8.8 20-80